// Libraries
import {
    Routes,
    Route,
    Navigate
} from "react-router-dom";

// Routes
import InnerContent from "./inner-content.router";

// Views - Page
import HomePage from "../components/pages/home/home-page";
import NotFoundPage from "../components/pages/not-found/not-found.page";
import DeniedPage from "../components/pages/auth-denied/auth-denied.page";
import Lobby from "./../components/templates/lobby-Template/lobby-template";
import PublicRoutes from "./public-routes.router";

const AppRouter = () => {

    return (
        <Routes>
            {/** Protected Routes */}
            {/** Wrap all Route under ProtectedRoutes element */}
            {/* <Route path="/" element={<ProtectedRoutes />}> */}
                <Route path="/" element={<InnerContent />}>
                     <Route path="" element={<Navigate replace to="/home"/>}/>
                    {/*<Route path="/home" element={<HomePage />} />
                    <Route path="Lobby" element={<Lobby />} /> */}



                    {/* <Route path="/welcome" element={<WelcomePage />} />
                    <Route path="/*" element={<MainRoutes />} /> */}
                    {/* Examples routes on app-root.router */}

                    {/* 1- Type Route */}
                    {/* <Route path="tabs" element={<Tabs props={{userName: "Lions Team"}} />}> */}
                    {/* <Route path="/tabs" element={<Navigate replace to="tab1" />} /> */}

                    {/* 2- Type Route */}
                    {/* This router implement Role = admin - role get localStorage on ProtectedRoutes File*/}
                    {/* <Route path="tab1" element={<Tab1 />} /> */}

                    {/* 3- Type Route */}
                    {/* This router required role = USER */}
                    {/* <Route path="tab2" element={<ProtectedRoutes roles=[{`${AppConst.ROLE_USER}`}]/>}>
                       * <Route path="/tabs/tab2" element={<Tab2 />} />
                       * </Route> 
                      */}

                    {/* 4- Type Route (Route Simple)*/}
                    {/* <Route path="tab3" element={<Tab3 />} /> */}

                    {/* 5- Type Route (Grouping of routes of a module)*/}
                    {/* <Route path="/network/*" element={<DashboardRoutes />} /> */}
                    {/* 5.1- Implementation of grouped routes within the "DashboardRoutes" file.*/}
                    {/* <Routes>
                      <Route path="/" element={<MyNetwork/>}/>
                         <Route path="/users" element={<DashboardPage/>}/>
                         <Route path="/map" element={<MapPage/>}/>
                         <Route path="*" element={<Navigate replace to="/network"/>}/>
                       </Routes> */}

                </Route>
            {/* </Route> */}

            {/** Semi Protected Routes */}
            {/** Wrap all Route under Semi ProtectedRoutes element */}

            {/** Public Routes */}
            {/** Wrap all Route under PublicRoutes element */}
            <Route path="/" element={<PublicRoutes />}>
                <Route path="/" element={<Navigate replace to="home" />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/lobby" element={<Lobby />} />
                {/* <Route path="/groupsSelection" element={<GroupAndRoleSelectionPage />} /> */}
                
            </Route>
            {/** Permission denied route */}
            <Route path="/denied" element={<DeniedPage />} />

            {/** Not found page */}
            <Route path="/NotFoundPage" element={<NotFoundPage />} />
            <Route path="*" element={<Navigate replace to="/NotFoundPage" />} />

        </Routes>
    )
}

export default AppRouter