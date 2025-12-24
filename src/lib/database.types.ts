export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      departments: {
        Row: {
          id: string
          name: string
          description: string
          head_of_department: string
          slug: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string
          head_of_department?: string
          slug: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string
          head_of_department?: string
          slug?: string
          created_at?: string
          updated_at?: string
        }
      }
      programmes: {
        Row: {
          id: string
          name: string
          level: 'Undergraduate' | 'Postgraduate'
          department_id: string | null
          duration: string
          description: string
          slug: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          level: 'Undergraduate' | 'Postgraduate'
          department_id?: string | null
          duration?: string
          description?: string
          slug: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          level?: 'Undergraduate' | 'Postgraduate'
          department_id?: string | null
          duration?: string
          description?: string
          slug?: string
          created_at?: string
          updated_at?: string
        }
      }
      staff: {
        Row: {
          id: string
          name: string
          position: string
          department_id: string | null
          email: string
          profile_image: string
          bio: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          position?: string
          department_id?: string | null
          email?: string
          profile_image?: string
          bio?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          position?: string
          department_id?: string | null
          email?: string
          profile_image?: string
          bio?: string
          created_at?: string
          updated_at?: string
        }
      }
      news: {
        Row: {
          id: string
          title: string
          content: string
          image: string
          published_at: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          content?: string
          image?: string
          published_at?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          content?: string
          image?: string
          published_at?: string
          created_at?: string
          updated_at?: string
        }
      }
      research_areas: {
        Row: {
          id: string
          title: string
          description: string
          department_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description?: string
          department_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          department_id?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      admin_users: {
        Row: {
          id: string
          email: string
          role: 'admin' | 'editor'
          created_at: string
        }
        Insert: {
          id: string
          email: string
          role?: 'admin' | 'editor'
          created_at?: string
        }
        Update: {
          id?: string
          email?: string
          role?: 'admin' | 'editor'
          created_at?: string
        }
      }
    }
  }
}
