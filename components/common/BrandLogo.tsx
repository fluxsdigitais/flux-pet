type BrandLogoProps = {
  compact?: boolean;
  premium?: boolean;
};

export function BrandLogo({ compact = false, premium = true }: BrandLogoProps) {
  return (
    <div className={premium ? "flex items-center gap-3" : "flex items-center gap-space-sm"}>
      <div
        className={`${compact ? "h-8 w-8 rounded-lg" : "h-10 w-10 rounded-xl"} flex items-center justify-center ${
          premium ? "bg-brand" : "bg-primary-container"
        } ${premium && !compact ? "shadow-btn" : ""}`}
      >
        <span
          className={`material-symbols-outlined text-white ${compact ? "text-[18px]" : "text-[22px]"}`}
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          pets
        </span>
      </div>
      <div className="flex items-baseline tracking-tight">
        <span className={`${compact ? "text-base" : "text-xl"} font-extrabold ${premium ? "text-ink-primary" : "text-on-surface"}`}>
          FLUX
        </span>
        <span className={`${compact ? "text-base" : "text-xl"} ml-0.5 font-extrabold ${premium ? "text-brand" : "text-primary"}`}>
          PET
        </span>
      </div>
    </div>
  );
}
