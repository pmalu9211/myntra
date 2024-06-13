const Loading = () => {
  return (
    <>
      <div className="d-flex justify-content-center" style={{ margin: "40px" }}>
        <div className="spinner-border" role="status"></div>
      </div>
      <center className="fontboldpadding">
        This might take a while, as I have deployed using an free plan and the
        service is slow when not in use
      </center>
    </>
  );
};

export default Loading;
