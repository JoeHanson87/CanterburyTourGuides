'use client'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
} from 'recharts'

const monthlyData = [
  { month: 'Jan', revenue: 1280, bookings: 16 },
  { month: 'Feb', revenue: 1520, bookings: 19 },
  { month: 'Mar', revenue: 2240, bookings: 28 },
  { month: 'Apr', revenue: 3120, bookings: 39 },
  { month: 'May', revenue: 4480, bookings: 56 },
  { month: 'Jun', revenue: 5600, bookings: 70 },
  { month: 'Jul', revenue: 6720, bookings: 84 },
  { month: 'Aug', revenue: 7200, bookings: 90 },
  { month: 'Sep', revenue: 4960, bookings: 62 },
  { month: 'Oct', revenue: 3040, bookings: 38 },
  { month: 'Nov', revenue: 1760, bookings: 22 },
  { month: 'Dec', revenue: 1360, bookings: 17 },
]

const tourTypeData = [
  { name: 'Daily 11am', value: 65 },
  { name: 'Daily 2pm', value: 25 },
  { name: 'Group Tours', value: 10 },
]

export default function AdminReportsPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-bold text-gray-900">Reports</h1>
        <p className="text-gray-500 mt-1">Annual performance overview</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Annual Revenue', value: '£43,280', change: '+12%', colour: 'text-green-600' },
          { label: 'Total Bookings', value: '541', change: '+8%', colour: 'text-green-600' },
          { label: 'Avg Party Size', value: '3.2', change: '+5%', colour: 'text-green-600' },
          { label: 'Avg Booking Value', value: '£79.90', change: '+4%', colour: 'text-green-600' },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-xl border border-gray-200 p-5">
            <p className="text-gray-500 text-xs uppercase font-medium">{s.label}</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{s.value}</p>
            <p className={`text-xs font-medium mt-1 ${s.colour}`}>{s.change} vs last year</p>
          </div>
        ))}
      </div>

      {/* Revenue Chart */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
        <h2 className="font-serif text-xl font-bold text-gray-900 mb-4">Monthly Revenue & Bookings</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={monthlyData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} />
            <YAxis yAxisId="left" tick={{ fontSize: 12 }} tickFormatter={(v: number) => `£${v}`} />
            <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 12 }} />
            <Tooltip
              formatter={(value: number, name: string) =>
                name === 'revenue' ? [`£${value}`, 'Revenue'] : [value, 'Bookings']
              }
            />
            <Legend />
            <Bar yAxisId="left" dataKey="revenue" name="Revenue" fill="#1a4731" radius={[4, 4, 0, 0]} />
            <Bar yAxisId="right" dataKey="bookings" name="Bookings" fill="#b8860b" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Line Chart */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="font-serif text-xl font-bold text-gray-900 mb-4">Booking Trend</h2>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={monthlyData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="bookings"
              name="Bookings"
              stroke="#1a4731"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
