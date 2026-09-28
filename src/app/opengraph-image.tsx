import { ImageResponse } from "next/og";

export const alt = "Blue Norte Promociones, obra nueva";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        background: "#0c1c2e",
        color: "#f7f4ef",
        padding: "72px",
      }}
    >
      <div style={{ fontSize: 28, letterSpacing: 6, color: "#c4b49a" }}>OBRA NUEVA</div>
      <div style={{ fontSize: 84, marginTop: 16 }}>Blue Norte</div>
      <div style={{ fontSize: 32, marginTop: 12 }}>Málaga · Santander · Madrid</div>
    </div>,
    { ...size },
  );
}
