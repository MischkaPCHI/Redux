export interface Activityinfo {
    id: string
    question: string
  }
  
export interface RandomActivitySliceState {
    data: Activityinfo[]
    status: 'default' | 'loading' | 'success' | 'error'
    error: any
}