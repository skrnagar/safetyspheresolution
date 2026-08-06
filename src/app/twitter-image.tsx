import { ImageResponse } from "next/og";

export const alt = "Safety Sphere Solution — 360° Fire, EHS & Digital Safety";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background:
            "linear-gradient(135deg, #07152f 0%, #0b1f45 55%, #132b57 100%)",
          color: "white",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: 28,
            fontWeight: 700,
          }}
        >
          <div
            style={{
              width: 54,
              height: 54,
              borderRadius: 999,
              background: "#E63946",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
            }}
          >
            SS
          </div>
          Safety Sphere Solution
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 58,
              fontWeight: 700,
              lineHeight: 1.1,
              maxWidth: 980,
            }}
          >
            360° Fire, EHS & Digital Safety Solutions
          </div>
          <div
            style={{
              fontSize: 28,
              color: "rgba(255,255,255,0.78)",
              maxWidth: 900,
            }}
          >
            Fire NOC · Safety Audits · EHS Training · ESG · AI Safety Monitoring
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            color: "rgba(255,255,255,0.7)",
          }}
        >
          <span>Nagpur (MH) · Raipur (CG)</span>
          <span style={{ color: "#E63946", fontWeight: 700 }}>
            safetyspheresolution.vercel.app
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
