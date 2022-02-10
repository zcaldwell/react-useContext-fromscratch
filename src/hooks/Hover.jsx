import { useHover } from 'react-use';

export default function Hover() {
  const element = (hovered) => (
    <div>Hover Here Casey! {hovered && 'Give me full credit casey!'}</div>
  );

  const [hoverable, hovered] = useHover(element);

  return (
    <div>
      {hoverable}
      <div>{hovered ? 'HOVERED' : ''}</div>
    </div>
  );
}
