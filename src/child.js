export default function Child(props) {
  const buttonClick = () => {
    props.callBack("childddd");
  };
  return (
    <div>
      <h1>child component</h1>
      <button onClick={buttonClick}>click</button>
    </div>
  );
}
