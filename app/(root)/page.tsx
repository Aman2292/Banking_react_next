import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { getLoggedInUser } from '@/lib/actions/user.action'
import React from 'react'

const Home = async () => {
    const loggedIn = await getLoggedInUser();
  return (
    <section className="home">
        <div className="home-content">
        <header className="home-header">
            <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || 'Guest'}
            subtext="Access and manage your account and transaction effeciently"
            />
          <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={6664.45}
          />
        </header>
        RECENT TRANSCATIONS
        </div>
        <RightSidebar 
        user ={loggedIn}
        transactions={[]}
        banks={[{currentBalance:5555.20},{currentBalance:9855.20}]}

        />
    </section>
  ) 
}

export default Home

