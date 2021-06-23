import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const Recoil = lazy(() => import('./packages/recoil'))

function App() {
  return (
    <Router>
      <Suspense fallback={null}>
        <Switch>
          <Route path="/recoil" component={Recoil} />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default App
