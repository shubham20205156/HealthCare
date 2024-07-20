import { Component, AfterViewChecked } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewChecked {
  userData = [
    {
      id: 1,
      name: 'John Doe',
      workouts: [
        { type: 'Running', minutes: 30 },
        { type: 'Cycling', minutes: 45 }
      ]
    },
    {
      id: 2,
      name: 'Jane Smith',
      workouts: [
        { type: 'Swimming', minutes: 60 },
        { type: 'Running', minutes: 20 }
      ]
    },
    {
      id: 3,
      name: 'Mike Johnson',
      workouts: [
        { type: 'Yoga', minutes: 50 },
        { type: 'Cycling', minutes: 40 }
      ]
    },
    {
      id:4,
      name: 'Mike Johnson',
      workouts: [
        { type: 'Yoga', minutes: 50 },
        { type: 'Cycling', minutes: 40 }
      ]
    },
    {
      id: 5,
      name: 'Mike Johnson',
      workouts: [
        { type: 'Yoga', minutes: 50 },
        { type: 'Cycling', minutes: 40 }
      ]
    },
    {
      id: 6,
      name: 'Mike Johnson',
      workouts: [
        { type: 'Yoga', minutes: 50 },
        { type: 'Cycling', minutes: 40 }
      ]
    }
    
  ];

  formData = {
    name: '',
    type: '',
    minutes: null as number | null
  };

  showTable = false; // boolean flag to control table visibility

  // Method to calculate total workout minutes
  getTotalWorkoutMinutes(workouts: { type: string, minutes: number }[]): number {
    return workouts.reduce((total, workout) => total + workout.minutes, 0);
  }

  // Method to handle form submission
  onSubmit() {
    const { name, type, minutes } = this.formData;

    if (!name || !type || minutes === null) {
      return;
    }

    let user = this.userData.find(user => user.name === name);
    if (user) {
      user.workouts.push({ type, minutes });
    } else {
      const newUser = {
        id: this.userData.length + 1,
        name,
        workouts: [{ type, minutes }]
      };
      this.userData.push(newUser);
    }

    // Reset form fields
    this.formData = {
      name: '',
      type: '',
      minutes: null
    };
  }

  // Method to toggle table visibility and scroll to bottom
  toggleTable() {
    this.showTable = !this.showTable;
    if (this.showTable) {
      setTimeout(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth'
        });
      }, 0); // Ensure scrolling happens after the table is rendered
    }
  }

  // Optional: If you want to handle the scrolling after view checked (in case of delayed rendering)
  ngAfterViewChecked() {
    if (this.showTable) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      });
    }
  }

  // Getter for the navbar text
  getNavbarText(): string {
    return this.showTable ? 'Home' : 'User Workout List';
  }
}
