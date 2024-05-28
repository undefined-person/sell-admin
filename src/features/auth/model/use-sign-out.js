import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

import { ROUTES } from '../../../shared/const/routes'
import { useResetSession, signOut } from '../../../entities/auth'

export const useSignOut = () => {
  const navigate = useNavigate()
  const resetSession = useResetSession()

  const signOutMutation = useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      navigate(ROUTES.SIGN_IN)
      resetSession()
    },
  })

  return {
    signOut: signOutMutation.mutate,
    isLoading: signOutMutation.isPending,
  }
}
