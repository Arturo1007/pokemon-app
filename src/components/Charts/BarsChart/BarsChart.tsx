import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, LabelList } from 'recharts';

interface PieChartProps {
  stats: {
    hp : string,
    attack : string,
    defence : string,
    specialAttack : string,
    specialDefense : string,
    speed : string,
  }
}

function BarsChart(props: PieChartProps) {
  const { stats } = props;
  const data = [
    {
      name: 'HP',
      stat: stats.hp,
    },
    {
      name: 'Atk',
      stat: stats.attack,
    },
    {
      name: 'Def',
      stat: stats.defence,
    },
    {
      name: 'SAtk',
      stat: stats.specialAttack,
    },
    {
      name: 'SDef',
      stat: stats.specialDefense,
    },
    {
      name: 'Speed',
      stat: stats.speed,
    },
  ];

  return (
    <div style={{ width: '100%', height: 300, marginTop: 30 }}>
    <ResponsiveContainer>
      <BarChart data={data} barSize={30}>
        <Bar dataKey="stat" fill="#6d5b0f" background={{ fill: '#eee' }} >
          <LabelList dataKey="stat" position="top" fill="##FFEC9E" />
        </Bar>
        <XAxis dataKey="name" stroke='#6d5b0f'/>
        <YAxis domain={[0, 255]} stroke="#6d5b0f" tick={false} width={0}/>
      </BarChart>
    </ResponsiveContainer>
    </div>
  );
}

export default BarsChart