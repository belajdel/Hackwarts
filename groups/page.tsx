import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Plus, Users } from 'lucide-react'

export default function Groups() {
  const groups = [
    { id: 1, name: 'Junior Inventors', program: 'Robotics 101', students: 12 },
    { id: 2, name: 'Code Wizards', program: 'Advanced Coding', students: 15 },
    { id: 3, name: 'Circuit Builders', program: 'Electronics Workshop', students: 10 },
  ]

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">Groups</h1>
        <Button><Plus className="mr-2 h-4 w-4" /> Create Group</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((group) => (
          <Card key={group.id}>
            <CardHeader>
              <CardTitle>{group.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-2">Program: {group.program}</p>
              <p className="font-semibold flex items-center">
                <Users className="mr-2 h-4 w-4" /> {group.students} students
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

