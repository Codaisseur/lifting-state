// src/components/Player.js
export default function Player(props) {
  const onIncrease = () => {
    props.onIncrementClick(props.id);
    //
  };
  return (
    <li className='Player'>
      <p>
        {props.name} - {props.score}
      </p>
      <button onClick={onIncrease}>+</button>
    </li>
  );
}
