
import Tabs from '@/components/ui/Tabs'
import Channel from './Components/Channel'
import Region from './Components/Region'
import SubChannel from './Components/SubChannel'
import Area from './Components/Area'
import Territory from './Components/Territory'
import Route from './Components/Route'
import Agency from './Components/Agency'


const { TabNav, TabList, TabContent } = Tabs

const Default = () => {
    return (
        <div>
            <Tabs defaultValue="tab1">
                <TabList>
                    <TabNav value="tab1">Channel</TabNav>
                    <TabNav value="tab2">Sub-Channel</TabNav>
                    <TabNav value="tab3">Region</TabNav>
                    <TabNav value="tab4">Area</TabNav>
                    <TabNav value="tab5">Territory</TabNav>
                    <TabNav value="tab6">Route</TabNav>
                    <TabNav value="tab7">Agency</TabNav>
                </TabList>
                <div className="py-3">

                    {/* Channel Creation */}
                    <TabContent value="tab1"> 
                            <Channel/>
                    </TabContent>

                    {/* Sub-Channel Creation */}
                    <TabContent value="tab2">
                            <SubChannel/>
                    </TabContent>

                    {/* Region Creation */}
                    <TabContent value="tab3">
                            <Region/>
                    </TabContent>

                    {/* Area Creation */}
                    <TabContent value="tab4">
                        <Area/>
                    </TabContent>

                    {/* Territory Creation */}
                    <TabContent value="tab5">
                        <Territory/>
                    </TabContent>

                    {/* Route Creation */}
                    <TabContent value="tab6">
                        <Route/>
                    </TabContent>

                    {/* Agency Creation */}
                    <TabContent value="tab7">
                        <Agency/>
                    </TabContent>
                </div>
            </Tabs>
        </div>
    )
}

export default Default
