import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { REDIRECTS } from '../redirects'

function RedirectHandler() {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const destination = REDIRECTS[location.pathname]
    if (destination && destination !== location.pathname) {
      navigate(destination, { replace: true })
    }
  }, [location.pathname, navigate])

  return null
}

export default RedirectHandler