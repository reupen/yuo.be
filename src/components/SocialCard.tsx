interface Props {
  strapline?: string
  title: string
}

export const SocialCard = ({ strapline, title }: Props) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      background: "white",
      width: "1200px",
      height: "100%",
      textWrap: "pretty",
    }}
  >
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "505px",
        padding: "2.75% 6%",
        width: "100%",
      }}
    >
      <h1
        style={{
          display: "block",
          color: "black",
          fontSize: "80px",
          fontWeight: "600",
          lineClamp: "3",
        }}
      >
        {title}
      </h1>
      {strapline && (
        <div
          style={{
            display: "block",
            color: "black",
            fontSize: "30px",
            fontWeight: "500",
            lineClamp: "2",
          }}
        >
          {strapline}
        </div>
      )}
    </div>
    <div
      style={{
        display: "flex",
        background: "#d85107",
        color: "white",
        height: "125px",
        fontSize: "40px",
        fontWeight: "600",
        alignItems: "center",
        padding: "0 6%",
      }}
    >
      yuo.be
    </div>
  </div>
)
