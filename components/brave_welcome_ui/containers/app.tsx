/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

// Feature-specific components
import { Page, Panel, SlideContent } from '../components'

// Component groups
import WelcomeBox from './screens/welcomeBox'
import ImportBox from './screens/importBox'
import SearchBox from './screens/searchBox'
import ThemeBox from './screens/themeBox'
import FooterBox from './screens/footerBox'

// Images
import { Background, BackgroundContainer } from '../components/images'

// Utils
import * as welcomeActions from '../actions/welcome_actions'

// Assets
import '../../fonts/muli.css'
import '../../fonts/poppins.css'
import 'emptykit.css'

interface Props {
  welcomeData: Welcome.State
  actions: any
}

export interface State {
  currentScreen: number
  finished: boolean,
  skipped: boolean
  shouldUpdateElementOverflow: boolean
}

const totalScreensSize = 4

export class WelcomePage extends React.Component<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      currentScreen: 1,
      finished: false,
      skipped: false,
      shouldUpdateElementOverflow: false
    }
  }

  get currentScreen () {
    return this.state.currentScreen
  }

  onClickLetsGo = () => {
    this.setState({ currentScreen: this.state.currentScreen + 1 })
  }

  onClickImport = (sourceBrowserProfileIndex: number) => {
    this.props.actions.importBrowserProfileRequested(sourceBrowserProfileIndex)
    this.setState({ currentScreen: this.state.currentScreen + 1 })
  }

  onClickRewardsGetStarted = () => {
    this.props.actions.goToTabRequested('chrome://rewards', '_blank')
  }
  onClickChooseYourTheme = () => {
    this.props.actions.goToTabRequested('chrome://settings/appearance', '_blank')
  }

  onClickSlideBullet = (nextScreen: number) => {
    this.setState({ currentScreen: nextScreen })
  }

  onClickNext = () => {
    this.setState({ currentScreen: this.state.currentScreen + 1 })
  }

  onClickDone = () => {
    this.props.actions.goToTabRequested('chrome://newtab', '_self')
  }

  onClickSkip = () => {
    this.props.actions.goToTabRequested('chrome://newtab', '_self')
  }

  resetStyleOverflow = () => {
    this.setState({ shouldUpdateElementOverflow: true })
  }

  render () {
    const { welcomeData, actions } = this.props
    const { shouldUpdateElementOverflow } = this.state
    return (
      <>
        <Page
          id='welcomePage'
          onAnimationEnd={this.resetStyleOverflow}
          shouldUpdateElementOverflow={shouldUpdateElementOverflow}
        >
          <Panel>
            <SlideContent>
              <WelcomeBox index={1} currentScreen={this.currentScreen} onClick={this.onClickLetsGo} />
              <ImportBox
                index={2}
                currentScreen={this.currentScreen}
                onClick={this.onClickImport}
                browserProfiles={welcomeData.browserProfiles}
              />
              <SearchBox
                index={3}
                currentScreen={this.currentScreen}
                onClick={this.onClickNext}
                changeDefaultSearchProvider={actions.changeDefaultSearchProvider}
                searchProviders={welcomeData.searchProviders}
              />
              <ThemeBox index={4} currentScreen={this.currentScreen} onChangeTheme={actions.setTheme} browserThemes={welcomeData.browserThemes} />
            </SlideContent>
            <FooterBox
              totalScreensSize={totalScreensSize}
              currentScreen={this.currentScreen}
              onClickSkip={this.onClickSkip}
              onClickSlideBullet={this.onClickSlideBullet}
              onClickNext={this.onClickNext}
              onClickDone={this.onClickDone}
            />
          </Panel>
          <BackgroundContainer>
            <Background/>
          </BackgroundContainer>
        </Page>
      </>
    )
  }
}

export const mapStateToProps = (state: Welcome.ApplicationState) => ({
  welcomeData: state.welcomeData
})

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators(welcomeActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WelcomePage)