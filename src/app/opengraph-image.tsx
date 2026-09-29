import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0A0A0B",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 80px",
          position: "relative",
          fontFamily: "system-ui, -apple-system, sans-serif"
        }}
      >
        {/* Subtle grid lines border */}
        <div
          style={{
            position: "absolute",
            inset: "24px",
            border: "1px solid #26282D",
            display: "flex"
          }}
        />

        {/* Top Bar: Telemetry & Origin */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            zIndex: 10
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              color: "#C8A96A",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase"
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#D4633A"
              }}
            />
            <span>PORTFOLIO 2035 // HUMAN × MACHINE</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 14px",
              background: "#121316",
              border: "1px solid #26282D",
              color: "#8B8F98",
              fontSize: "12px",
              letterSpacing: "0.15em",
              textTransform: "uppercase"
            }}
          >
            <span>INDIA [20.5937° N, 78.9629° E]</span>
          </div>
        </div>

        {/* Center: Typographic Headline & Role */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            zIndex: 10
          }}
        >
          <h1
            style={{
              fontSize: "88px",
              fontWeight: 900,
              color: "#EDE7DB",
              letterSpacing: "-0.02em",
              lineHeight: 1,
              margin: 0,
              textTransform: "uppercase"
            }}
          >
            DEV JASHANI
          </h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px"
            }}
          >
            <span
              style={{
                fontSize: "26px",
                fontWeight: 700,
                color: "#C8A96A",
                letterSpacing: "0.08em",
                textTransform: "uppercase"
              }}
            >
              JAVA FULL STACK DEVELOPER
            </span>
            <span style={{ color: "#26282D", fontSize: "24px" }}>|</span>
            <span
              style={{
                fontSize: "22px",
                color: "#8B8F98",
                letterSpacing: "0.04em"
              }}
            >
              Spring Boot • React • PostgreSQL
            </span>
          </div>
        </div>

        {/* Bottom Bar: Architecture Tags & Domain */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            zIndex: 10,
            borderTop: "1px solid #26282D",
            paddingTop: "24px"
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "12px"
            }}
          >
            {["Microservices", "REST APIs", "Clean Architecture", "Docker"].map((tag) => (
              <div
                key={tag}
                style={{
                  padding: "6px 14px",
                  background: "#121316",
                  border: "1px solid #26282D",
                  color: "#EDE7DB",
                  fontSize: "13px",
                  letterSpacing: "0.05em"
                }}
              >
                {tag}
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#C8A96A",
              fontSize: "15px",
              fontWeight: 700,
              letterSpacing: "0.05em"
            }}
          >
            <span>devjashani.com</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size
    }
  );
}
