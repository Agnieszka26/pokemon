import react, {useEffect} from "react";
import {useState} from "react";

const Stats = ({stats}) => {
const [stat, setStat] = useState([]);

  useEffect(() => {
    if (stats.length !== 0) {
      setStat(stats);
    }
  });

  return (
    <>
      {stat &&
        stat.map((item, id) => {
          return (
            <ul key={id}>
              <ol key={id}>
                {item.stat.name} {item.base_stat}
              </ol>
            </ul>
          );
        })}
    </>
  );
};

export default Stats;
