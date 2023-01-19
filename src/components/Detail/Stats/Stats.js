import {SmallText, Bigtext} from "../Detail.style";
import {CardStats, StatsTile} from "./Stats.styles";
import {ContextList} from "../../Context/ContextProvider";
import {useContext} from "react";

const Stats = () => {
  const context = useContext(ContextList);

  const stats = context.pokemon.stats;
  return (
    <>
      <CardStats>
        {stats &&
          stats.map((stat, id) => (
            <StatsTile key={id}>
              <Bigtext> {stat.base_stat} </Bigtext>
              <SmallText>{stat.stat.name} </SmallText>
            </StatsTile>
          ))}
      </CardStats>
    </>
  );
};

export default Stats;
