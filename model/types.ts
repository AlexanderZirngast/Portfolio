export interface GithubProject {
    id: number
    name: string,
    url: string,
    description?: string,
    created_at: Date,
    homepage?: string,
    languages: string [],
}