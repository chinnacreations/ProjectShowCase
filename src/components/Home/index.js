import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import {
  ListItem,
  ProjectList,
  ProjectImage,
  ProjectName,
  FailureContainer,
  FailureImage,
  Heading,
  Description,
  Button,
  MainContainer,
  SelectContainer,
  Select,
} from './style'

const categoriesList = [
  {id: 'ALL', displayText: 'All'},
  {id: 'STATIC', displayText: 'Static'},
  {id: 'RESPONSIVE', displayText: 'Responsive'},
  {id: 'DYNAMIC', displayText: 'Dynamic'},
  {id: 'REACT', displayText: 'React'},
]

const apiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    project: [],
    category: categoriesList[0].id,
    apiStatus: apiStatusConstant.initial,
  }

  componentDidMount() {
    this.getData()
  }

  changeSelector = event => {
    this.setState({category: event.target.value})
  }

  getData = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})
    const {category} = this.state
    const apiUrl = `https://apis.ccbp.in/ps/projects?category=${category}`
    const response = await fetch(apiUrl)
    console.log(response)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      const updatedData = data.projects.map(eachItem => ({
        id: eachItem.id,
        imageUrl: eachItem.image_url,
        name: eachItem.name,
      }))
      this.setState({
        project: updatedData,
        apiStatus: apiStatusConstant.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstant.failure,
      })
    }
  }

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderSuccess = () => {
    const {project} = this.state
    return (
      <ListItem>
        {project.map(eachProject => (
          <ProjectList key={eachProject.id}>
            <ProjectImage src={eachProject.imageUrl} alt={eachProject.name} />
            <ProjectName>{eachProject.name}</ProjectName>
          </ProjectList>
        ))}
      </ListItem>
    )
  }

  renderFailure = () => (
    <FailureContainer>
      <Header />
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/projects-showcase/failure-img.png"
        alt="failure view"
      />
      <Heading>Oops! Something Went Wrong</Heading>
      <Description>
        We cannot seem to find the page you are looking for
      </Description>
      <Button type="button" onCLick={this.getData()}>
        Retry
      </Button>
    </FailureContainer>
  )

  renderProjects = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstant.inProgress:
        return this.renderLoader()
      case apiStatusConstant.success:
        return this.renderSuccess()
      case apiStatusConstant.failure:
        return this.renderFailure()
      default:
        return null
    }
  }

  render() {
    const {category} = this.state

    return (
      <MainContainer>
        <Header />
        <SelectContainer>
          <Select onChange={this.changeSelector} value={category.id}>
            {categoriesList.map(each => (
              <option value={each.id} key={each.id}>
                {each.displayText}
              </option>
            ))}
          </Select>
          {this.renderProjects()}
        </SelectContainer>
      </MainContainer>
    )
  }
}
export default Home
