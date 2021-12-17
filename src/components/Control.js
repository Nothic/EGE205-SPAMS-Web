function Control(props) {
  return (
    <>
      <div className="grow bg-emerald-600 rounded-t-md font-semibold ">
        <div>{props.controlType}</div>
      </div>
    </>
  );
}

export default Control;
