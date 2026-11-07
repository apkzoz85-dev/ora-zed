// Image with a branded placeholder underneath — if the file is missing, the placeholder shows instead of a broken image.
export default function Photo({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-[#d9d1c5] ${className}`}>
      <div className="absolute inset-0 grid place-items-center" aria-hidden="true">
        <span className="num text-[13px] tracking-[0.3em] text-[#a99f92]">ZED EAST</span>
      </div>
      <div role="img" aria-label={alt} className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${src})` }} />
    </div>
  );
}
