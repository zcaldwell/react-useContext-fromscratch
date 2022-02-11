import { useHover } from 'react-use';

export default function Hover() {
  const element = (hovered) => (
    <div>
      {!hovered && 'Hover Here Casey!'} {hovered && 'Give me full credit!'}
    </div>
  );

  const [hoverable, hovered] = useHover(element);

  return (
    <div>
      {hoverable}
      <div>{hovered ? '' : ''}</div>
    </div>
  );
}
