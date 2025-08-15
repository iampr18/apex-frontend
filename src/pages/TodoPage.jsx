import { useEffect, useState } from 'react'
import { Box, Typography, TextField, Button, Stack, IconButton, List, ListItem, ListItemText } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'
import AppTopBar from '../components/common/AppTopBar.jsx'
import { useAuth } from '../hooks/useAuth.js'
import todoService from '../api/services/todoService.js'

export default function TodoPage() {
  const { user, logout } = useAuth()
  const [items, setItems] = useState([])
  const [text, setText] = useState('')
  const [date, setDate] = useState(dayjs())
  const [error, setError] = useState('')

  async function load() {
    try {
      const res = await todoService.getAllTodosByUserId(user.id)
      setItems(res.data.items || [])
    } catch (e) {
      setError('Failed to load todos')
    }
  }

  useEffect(() => { if (user) load() }, [user])

  async function add() {
    setError('')
    if (!text) return
    try {
      const res = await todoService.postTodoByUserId(user.id, { text, dueDate: dayjs(date).format('YYYY-MM-DD') })
      setItems([...(items||[]), res.data])
      setText('')
    } catch (e) {
      setError('Failed to add todo')
    }
  }

  async function remove(id) {
    setError('')
    try {
      await todoService.deleteTodosByUserId(id)
      setItems((items||[]).filter(i => i.id !== id && i._id !== id))
    } catch (e) {
      setError('Failed to delete todo')
    }
  }

  return (
    <Box sx={{ py: 2 }}>
      <AppTopBar onLogout={logout} />
      <Typography variant="h4" sx={{ mb: 2 }}>Todo app</Typography>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 3 }}>
          <TextField label="New todo" value={text} onChange={e=>setText(e.target.value)} fullWidth />
          <DatePicker label="Due date" value={date} onChange={setDate} />
          <Button variant="contained" onClick={add}>Add</Button>
        </Stack>
      </LocalizationProvider>

      {error && <Typography color="error" sx={{ mb: 2 }}>{error}</Typography>}

      <List>
        {(items && items.length > 0) ? items.map(item => (
          <ListItem key={item.id || item._id} secondaryAction={
            <IconButton edge="end" aria-label="delete" onClick={()=>remove(item.id || item._id)}>
              <DeleteIcon />
            </IconButton>
          }>
            <ListItemText
              primary={item.text}
              secondary={dayjs(item.dueDate).format('YYYY-MM-DD')}
            />
          </ListItem>
        )) : <Typography>Enjoy your day</Typography>}
      </List>
    </Box>
  )
}
