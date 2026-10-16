import { useEffect, useRef, useState, MouseEvent } from 'react';
import Player from '@vimeo/player';
import { Play, Pause } from 'lucide-react';

interface VimeoCustomPlayerProps {
  key?: string | number;
  videoId: string | number;
  title?: string;
  thumbnailUrl?: string;
  initialPlayLabel?: string;
  className?: string;
}

export default function VimeoCustomPlayer({
  videoId,
  title = "Vídeo",
  thumbnailUrl,
  initialPlayLabel = "Clique para assistir",
  className = ""
}: VimeoCustomPlayerProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<Player | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [feedback, setFeedback] = useState<'play' | 'pause' | null>(null);

  const playerId = `vimeo_player_${videoId}`;

  const sendDirectPostMessage = (method: string, value?: unknown) => {
    const iframe = iframeRef.current;
    if (!iframe || !iframe.contentWindow) return;
    const win = iframe.contentWindow;
    const msgObj = value !== undefined ? { method, value } : { method };
    const msgStr = JSON.stringify(msgObj);
    try {
      win.postMessage(msgObj, '*');
      win.postMessage(msgStr, '*');
    } catch (_) {}
  };

  const showFeedback = (type: 'play' | 'pause') => {
    setFeedback(type);
    const timer = setTimeout(() => {
      setFeedback(null);
    }, 600);
    return () => clearTimeout(timer);
  };

  // Initialize Vimeo Player SDK once iframe is mounted (`hasStarted` = true)
  useEffect(() => {
    if (!hasStarted) return;
    const iframe = iframeRef.current;
    if (!iframe) return;

    let player: Player | null = null;
    try {
      player = new Player(iframe);
      playerRef.current = player;

      player.on('play', () => {
        setIsPlaying(true);
      });

      player.on('pause', () => {
        setIsPlaying(false);
      });

      player.on('ended', () => {
        setIsPlaying(false);
      });
    } catch (_) {}

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy().catch(() => {});
        playerRef.current = null;
      }
    };
  }, [hasStarted, videoId]);

  const handleUnmute = (e: MouseEvent) => {
    e.stopPropagation();
    setIsMuted(false);
    sendDirectPostMessage('setMuted', false);
    sendDirectPostMessage('setVolume', 1);
    if (playerRef.current) {
      playerRef.current.setMuted(false).catch(() => {});
      playerRef.current.setVolume(1).catch(() => {});
    }
  };

  const togglePlayPause = (e?: MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }

    if (!hasStarted) {
      // First click: Mount iframe with autoplay=1&muted=1 synchronously for Safari
      setHasStarted(true);
      setIsPlaying(true);
      setIsMuted(true);
      showFeedback('play');
      return;
    }

    if (isPlaying) {
      setIsPlaying(false);
      showFeedback('pause');
      sendDirectPostMessage('pause');
      if (playerRef.current) {
        playerRef.current.pause().catch(() => {});
      }
    } else {
      setIsPlaying(true);
      showFeedback('play');
      sendDirectPostMessage('play');
      if (playerRef.current) {
        playerRef.current.play().catch(() => {});
      }
    }
  };

  return (
    <div
      className={`relative w-full aspect-video bg-black overflow-hidden select-none group cursor-pointer ${className}`}
      onClick={togglePlayPause}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          togglePlayPause();
        }
      }}
      aria-label={`Vídeo: ${title}. ${isPlaying ? 'Clique para pausar' : 'Clique para reproduzir'}`}
    >
      {hasStarted ? (
        <div className="relative w-full h-full">
          <iframe
            ref={iframeRef}
            id={playerId}
            src={`https://player.vimeo.com/video/${videoId}?api=1&player_id=${playerId}&autoplay=1&muted=1&controls=0&title=0&byline=0&portrait=0&badge=0&share=0&like=0&watchlater=0&autopause=0&transparent=0&dnt=1`}
            title={title}
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            className="w-full h-full border-0 pointer-events-none"
          />

          {/* Floating Unmute Button */}
          {isMuted && (
            <button
              type="button"
              onClick={handleUnmute}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-brand-primary text-white px-6 py-3 rounded-full font-bold text-sm sm:text-base shadow-2xl flex items-center gap-2.5 hover:scale-105 active:scale-95 transition-all animate-pulse border-2 border-white/90 cursor-pointer"
            >
              <span className="text-lg">🔊</span>
              <span>Toque para ouvir</span>
            </button>
          )}
        </div>
      ) : (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/90">
          {thumbnailUrl && (
            <img
              src={thumbnailUrl}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            />
          )}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
          <div className="relative z-20 flex flex-col items-center gap-3 p-4 text-center">
            <div className="relative flex items-center justify-center">
              <div className="absolute w-20 h-20 rounded-full bg-rose-500/35 animate-ping pointer-events-none" />
              <button
                type="button"
                onClick={togglePlayPause}
                aria-label={initialPlayLabel}
                className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-rose-600 via-rose-500 to-pink-500 hover:from-rose-500 hover:to-pink-400 text-white flex items-center justify-center shadow-[0_0_35px_rgba(225,29,72,0.7)] hover:scale-110 active:scale-95 transition-all duration-200 border-2 border-white/70 cursor-pointer"
              >
                <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white translate-x-0.5" />
              </button>
            </div>
            <span className="px-4 py-1.5 rounded-full bg-black/80 backdrop-blur-md text-white font-medium text-xs sm:text-sm border border-white/20 shadow-xl tracking-wide">
              {initialPlayLabel}
            </span>
          </div>
        </div>
      )}

      {/* Temporary Feedback on Screen Toggle (Play or Pause) */}
      {feedback && isPlaying && hasStarted && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none animate-out fade-out zoom-out-75 duration-500 z-30">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black/60 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-2xl">
            {feedback === 'play' ? (
              <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white translate-x-0.5" />
            ) : (
              <Pause className="w-8 h-8 sm:w-10 sm:h-10 fill-white" />
            )}
          </div>
        </div>
      )}

      {/* Subtle Pause Hint shown on hover while video is playing */}
      {isPlaying && hasStarted && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-30">
          <span className="px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-sm text-white/90 text-[11px] sm:text-xs font-medium border border-white/15 flex items-center gap-1.5 shadow-lg">
            <Pause size={12} className="fill-white" /> Clique na tela para pausar
          </span>
        </div>
      )}
    </div>
  );
}
