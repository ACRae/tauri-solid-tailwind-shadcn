import Main from "@/components/Main"
import TopMenuBar from "@/components/TopMenuBar"
import ThemeProvider  from "@/components/theme/ThemeProvider"

export default function App() {
  return (
    <ThemeProvider>
      <TopMenuBar />
      <div class="mt-10 flex flex-col items-center justify-center">
        <Main />
      </div>
    </ThemeProvider>
  )
}
