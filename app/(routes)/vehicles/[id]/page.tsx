
interface Props {
  params: {
    id: number;
  }
}

function Vehicle({ params: { id }}: Props) {
  return (
    <div>
      Vehicle {id}
    </div>
  );
};

export default Vehicle;