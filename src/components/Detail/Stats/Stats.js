import {SmallText, Bigtext} from "../Detail.style";
import {CardStats, StatsTile} from "./Stats.styles";

const Stats = ({stats}) => {
  return (
    <>
      <CardStats>
        {stats &&
          stats.map((item, id) => {
            return (
              <StatsTile key={id}>
                <Bigtext> {item.base_stat} </Bigtext>
                <SmallText>{item.stat.name} </SmallText>
              </StatsTile>
            );
          })}
      </CardStats>
    </>
  );
};

export default Stats;
