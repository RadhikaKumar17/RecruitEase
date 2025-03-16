import StreamClientProvider from '@/components/providers/streamClientProvider'

function Layout({ children }: { children: React.ReactNode }) {
  return <StreamClientProvider>{children}</StreamClientProvider>
}
export default Layout
