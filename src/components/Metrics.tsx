const metrics = [
  {
    name: 'Savings',
    count: 1287,
  },
  {
    name: 'Savings',
    count: 5786,
  },
  {
    name: 'Savings',
    count: 1440,
  },
  {
    name: 'Savings',
    count: 7110,
  },
];

const metricsList = metrics.map((metric, index) => (
  <div
    key={index}
    className="text-white font-quicksand  tracking-wider text-center"
  >
    <h2 className="text-[40px]">{metric.count}+</h2>
    <p className="text-[14px]">{metric.name}</p>
  </div>
));

const Metrics = () => {
  return (
    <div className="bg-orange-500 mt-8">
      <div className="px-6 py-8 max-w-7xl mx-auto flex flex-col gap-10 lg:flex-row justify-around">
        {metricsList}
      </div>
    </div>
  );
};

export default Metrics;
