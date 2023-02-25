import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';

const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF2dmZ5emZlb3lseXFhcWhuandzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcyNjc5ODQsImV4cCI6MTk5Mjg0Mzk4NH0.rCU5pOgITKwU6YirgCkpLw3GoVBiQMV9nseBzHECTTA'

const SUPABASE_URL = "https://qvvfyzfeoylyqaqhnjws.supabase.co"

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
      },
      realtime: {
        params: {
          eventsPerSecond: 10
        }
      }
});
