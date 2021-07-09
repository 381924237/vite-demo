import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const Recoil = lazy(() => import('./packages/recoil'))
const Loading = lazy(() => import('./packages/svgLoading'))
const RouterTest = lazy(() => import('./packages/routerTest'))

function App() {
  return (
    <Router>
      <Suspense fallback={null}>
        <Switch>
          <Route path="/recoil" component={Recoil} />
          <Route path="/loading" component={Loading} />
          <Route path="/routerTest" component={RouterTest} />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default App
