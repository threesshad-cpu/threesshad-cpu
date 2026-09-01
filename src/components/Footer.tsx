export function Footer() {
  return (
    <footer className="w-full py-8 border-t border-white/5 flex items-center justify-center text-center">
      <div className="text-muted text-sm flex flex-col items-center gap-2">
        <p>© {new Date().getFullYear()} Threessha D. All rights reserved.</p>
        <p className="flex items-center gap-2">
          <span>Built for the web, not the wallpaper.</span>
        </p>
      </div>
    </footer>
  );
}
