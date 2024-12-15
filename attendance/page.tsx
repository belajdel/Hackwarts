'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Calendar, Save } from 'lucide-react'

export default function Attendance() {
  const [selectedGroup, setSelectedGroup] = useState('')
  const [date, setDate] = useState('')
  const [attendance, setAttendance] = useState<Record<string, boolean>>({})

  const groups = [
    { id: '1', name: 'Junior Inventors' },
    { id: '2', name: 'Code Wizards' },
    { id: '3', name: 'Circuit Builders' },
  ]

  const students = [
    { id: '1', name: 'Alice Johnson' },
    { id: '2', name: 'Bob Smith' },
    { id: '3', name: 'Charlie Brown' },
    { id: '4', name: 'Diana Lee' },
  ]

  const handleAttendanceChange = (studentId: string, isPresent: boolean) => {
    setAttendance((prev) => ({ ...prev, [studentId]: isPresent }))
  }

  const handleSaveAttendance = () => {
    console.log('Saving attendance:', { group: selectedGroup, date, attendance })
    // Here you would typically send this data to your backend
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6">Attendance Tracking</h1>
      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Select Group</label>
              <Select onValueChange={setSelectedGroup}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a group" />
                </SelectTrigger>
                <SelectContent>
                  {groups.map((group) => (
                    <SelectItem key={group.id} value={group.id}>{group.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Mark Attendance</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {students.map((student) => (
              <li key={student.id} className="flex items-center">
                <Checkbox
                  id={`student-${student.id}`}
                  checked={attendance[student.id] || false}
                  onCheckedChange={(checked) => handleAttendanceChange(student.id, checked as boolean)}
                />
                <label htmlFor={`student-${student.id}`} className="ml-2">
                  {student.name}
                </label>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <div className="mt-6">
        <Button onClick={handleSaveAttendance}>
          <Save className="mr-2 h-4 w-4" /> Save Attendance
        </Button>
      </div>
    </div>
  )
}

