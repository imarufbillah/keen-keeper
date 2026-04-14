import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const ChartCard = ({ title, segments }) => (
  <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 sm:p-6 flex flex-col gap-4">
    <p className="text-sm text-muted">{title}</p>
    <div className="flex flex-col items-center gap-4">
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={segments}
            dataKey="count"
            nameKey="label"
            cx="50%"
            cy="50%"
            innerRadius={55}
            outerRadius={80}
            paddingAngle={3}
            strokeWidth={0}
          >
            {segments.map((seg, i) => (
              <Cell key={i} fill={seg.color} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value, name) => [value, name]}
            contentStyle={{
              borderRadius: "8px",
              border: "1px solid #f1f5f9",
              fontSize: "12px",
              color: "#1f2937",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
        {segments.map((seg) => (
          <span
            key={seg.label}
            className="flex items-center gap-1.5 text-xs text-muted"
          >
            <span
              className="inline-block w-2 h-2 rounded-full"
              style={{ backgroundColor: seg.color }}
            />
            {seg.label}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default ChartCard;
