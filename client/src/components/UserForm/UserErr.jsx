const UserErr = ({ isError, errMsg }) => {
  return (
    <>
      {isError && (
        <p className="err-msg" style={{ color: "red" }}>
          {errMsg}
        </p>
      )}
    </>
  );
};

export default UserErr;
