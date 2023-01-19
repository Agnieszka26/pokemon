import { useContext } from "react";
import { ContextList } from "../../Context/ContextProvider";
import { Bigtext, SmallText } from "../Detail.style";
import { CardStats, StatsTile } from "./Stats.styles";

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
