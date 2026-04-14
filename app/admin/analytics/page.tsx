"use client";

const MONTHLY_REVENUE = [
  { month: "Nov", revenue: 3200 },
  { month: "Dec", revenue: 4800 },
  { month: "Jan", revenue: 3900 },
  { month: "Feb", revenue: 5200 },
  { month: "Mar", revenue: 6100 },
  { month: "Apr", revenue: 4500 },
];

const TOP_SERVICES = [
  { name: "Website Development", orders: 12, revenue: 42000, percent: 85 },
  { name: "Mobile App", orders: 5, revenue: 25000, percent: 50 },
  { name: "UI/UX Design", orders: 9, revenue: 13500, percent: 27 },
  { name: "SEO Optimization", orders: 8, revenue: 6400, percent: 13 },
];

const maxRevenue = Math.max(...MONTHLY_REVENUE.map((m) => m.revenue));

export default function AdminAnalytics() {
  return (
    <div className="w-full min-h-screen bg-black p-8">
      <div className="max-w-7xl mx-auto">

        <div className="mb-12">
          <p className="text-yellow-400 font-black uppercase tracking-widest text-sm mb-2">Admin Dashboard</p>
          <h1 className="text-5xl md:text-7xl font-black text-white">Analytics</h1>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            { label: "Total Revenue", value: "$27,700", sub: "All time" },
            { label: "This Month", value: "$4,500", sub: "Apr 2026" },
            { label: "Avg Order Value", value: "$2,308", sub: "Per order" },
            { label: "Conversion Rate", value: "68%", sub: "Leads → Clients" },
          ].map((stat, i) => (
            <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-yellow-400 transition-all">
              <p className="text-zinc-500 text-sm font-bold uppercase mb-3">{stat.label}</p>
              <p className="text-4xl font-black text-yellow-400 mb-1">{stat.value}</p>
              <p className="text-zinc-600 text-sm">{stat.sub}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            <h2 className="text-2xl font-black text-white mb-8">Monthly Revenue</h2>
            <div className="flex items-end gap-4 h-48">
              {MONTHLY_REVENUE.map((m, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                  <p className="text-yellow-400 font-bold text-xs">${(m.revenue / 1000).toFixed(1)}k</p>
                  <div
                    className="w-full bg-yellow-400 rounded-t-lg transition-all hover:bg-yellow-500"
                    style={{ height: `${(m.revenue / maxRevenue) * 160}px` }}
                  ></div>
                  <p className="text-zinc-500 text-xs font-bold">{m.month}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            <h2 className="text-2xl font-black text-white mb-8">Top Services</h2>
            <div className="space-y-6">
              {TOP_SERVICES.map((service, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-bold text-white">{service.name}</p>
                    <p className="text-yellow-400 font-black">${service.revenue.toLocaleString()}</p>
                  </div>
                  <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellow-400 rounded-full"
                      style={{ width: `${service.percent}%` }}
                    ></div>
                  </div>
                  <p className="text-zinc-500 text-xs mt-1">{service.orders} orders</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-2xl font-black text-white mb-6">Traffic Overview</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: "Page Views", value: "12,480", change: "+8%" },
              { label: "Unique Visitors", value: "3,240", change: "+14%" },
              { label: "Bounce Rate", value: "34%", change: "-5%" },
              { label: "Avg Session", value: "3m 42s", change: "+22%" },
            ].map((item, i) => (
              <div key={i} className="p-4 bg-black border border-zinc-800 rounded-xl">
                <p className="text-zinc-500 text-sm font-bold uppercase mb-2">{item.label}</p>
                <p className="text-3xl font-black text-white mb-1">{item.value}</p>
                <p className="text-green-400 text-sm font-bold">{item.change} this month</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
