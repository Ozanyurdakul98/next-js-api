import Exercise1 from '../components/Exercise1';
import Exercise2 from '../components/Exercise2';
import Exercise3 from '../components/Exercise3';
import Exercise4 from '../components/Exercise4';

export default function IndexPage() {
  return (
    <div>
    <h2> This project can not make a connection to the JSON Database file uploaded with this project. The Apis can not get to that path. But the Code is valid and locally this project works all fine. </h2>
      <Exercise1 />
      <hr />
      <Exercise2 />
      <hr />
      <Exercise3 />
      <hr />
      <Exercise4 />
    </div>
  );
}
