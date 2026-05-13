import Coworker from "./Coworker";

export default function CoworkerList({ members }) {
  return (
    <div>
      {members.map((member, index) => (
        <Coworker key={index} person={member} />
      ))}
    </div>
  );
}