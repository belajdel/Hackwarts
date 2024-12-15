import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { CreditCard, Download, Plus } from 'lucide-react'

export default function Payments() {
  const payments = [
    { id: 1, student: 'Alice Johnson', amount: 250, date: '2023-06-01', status: 'Paid' },
    { id: 2, student: 'Bob Smith', amount: 250, date: '2023-06-02', status: 'Pending' },
    { id: 3, student: 'Charlie Brown', amount: 250, date: '2023-06-03', status: 'Paid' },
    { id: 4, student: 'Diana Lee', amount: 250, date: '2023-06-04', status: 'Overdue' },
  ]

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">Payment Management</h1>
        <div>
          <Button className="mr-2">
            <Download className="mr-2 h-4 w-4" /> Export
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Add Payment
          </Button>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Recent Payments</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payments.map((payment) => (
                <TableRow key={payment.id}>
                  <TableCell>{payment.student}</TableCell>
                  <TableCell>${payment.amount}</TableCell>
                  <TableCell>{payment.date}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold
                      ${payment.status === 'Paid' ? 'bg-green-100 text-green-800' :
                        payment.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'}`}>
                      {payment.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      <CreditCard className="mr-2 h-4 w-4" /> Process
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

