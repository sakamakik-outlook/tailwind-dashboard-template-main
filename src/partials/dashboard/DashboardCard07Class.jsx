import React from 'react';





class DashboardCard07Class extends React.Component {
  state = { payments: [], isLoading: true, error: null };

  async componentDidMount() {
      const response = await fetch('http://localhost:8080/all');
      const data = await response.json();
      this.setState({ payments: data.payments, isLoading: false });
  }


  render() {

    const { payments } = this.state;

    return (
      <div className="col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200">
        <header className="px-5 py-4 border-b border-slate-100">
          <h2 className="font-semibold text-slate-800">Recent Payments</h2>
        </header>
        <div className="p-3">

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              {/* Table header */}
              <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
                <tr>
                  <th className="p-2">
                    <div className="font-semibold text-center">BIC code</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-center">Name</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-center">Amount</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-center">Currency</div>
                  </th>
                </tr>
              </thead>
              {/* Table body */}
              <tbody className="text-sm font-medium divide-y divide-slate-100">
                {/* Row */}
                {payments.map(payment => (
                  <tr key="{payment.id}">
                    <td className="p-2">
                      <div className="flex items-center">
                        <div className="text-slate-800"  >{payment.bic } </div>
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="flex items-center">
                        <div className="text-slate-800">{payment.name} </div>
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="text-center text-green-500">${payment.amount} </div>
                    </td>
                    <td className="p-2">
                      <div className="text-center text-sky-500"  >{payment.currency}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default DashboardCard07Class;
