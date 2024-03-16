/* eslint-disable @typescript-eslint/no-explicit-any */
import { ToDoList } from './ToDoList'

const anyTask = {
  title: 'any_title',
  description: 'any_description',
  targetDate: '01/01/2025',
  type: 'any_type',
  priority: '1',
  subTasks: []
}

describe('ToDoList', () => {
  describe('Testing add', () => {
    test('should add a new task to the list', () => {
      const todoInstance = new ToDoList()
      todoInstance.add(anyTask)
      const tasks = todoInstance.getTasks()
      expect(tasks).toEqual([anyTask])
    })

    test('should add a valid tasks', () => {
      const todoInstance = new ToDoList()
      const invalidValue: any = {
        invalidField: 'invalidValue'
      }
      todoInstance.add(invalidValue)
      const tasks = todoInstance.getTasks()
      expect(tasks).toEqual([])
    })
})

  describe('Testing update', () => {
    test('should update a task to the list', () => {
        const todoInstance = new ToDoList()
        todoInstance.add(anyTask)
        const UpdateTask = {
            title: 'title',
            description: 'description',
            targetDate: '02/01/2025',
            type: 'type',
            priority: '2',
            subTasks: []
        }
        todoInstance.updateTask(0, UpdateTask)
        const tasks = todoInstance.getTasks()
        expect(tasks).toEqual([UpdateTask])
    })
})

  describe('Testing remove', () => {
    test('should remove a task to the list', () => {
        const todoInstance = new ToDoList()
        todoInstance.add(anyTask)
        todoInstance.removeTask(0)
        const tasks = todoInstance.getTasks()
        expect(tasks).toEqual([])
    })
})
})