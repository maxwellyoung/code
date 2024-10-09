import React from "react";

const javaCode = `package src;

public class MyDate {
    Month month;
    int day;
    int year;
    
    // Minimum and maximum year constants
    public final static int minYear = 1900;
    public final static int maxYear = 2090;
    
    // Enum representing months and their respective number of days
    enum Month {
        January(31), February(28), March(31), April(30), May(31), June(30), July(31), 
        August(31), September(30), October(31), November(30), December(31);

        private int numberDays;

        // Getter for the number of days in the month
        public int getNumberDays() {
            return this.numberDays;
        }

        // Private constructor for the enum constants
        private Month(int numberDays) {
            this.numberDays = numberDays;
        }
    }

    // Method to check if a year is a leap year
    public boolean isLeapYear(int year) {
        return (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
    }

    // Constructor that throws InvalidDate if the date is not valid
    public MyDate(int day, int month, int year) throws InvalidDate {
        // Check if the year is within the valid range
        if (year < minYear || year > maxYear) {
            throw new InvalidDate("Invalid year: " + year);
        }

        // Check if the month is valid (between 1 and 12)
        if (month < 1 || month > 12) {
            throw new InvalidDate("Invalid month: " + month);
        }

        // Set the month using enum
        this.month = Month.values()[month - 1];

        // Determine the maximum days for this month
        int maxDays = this.month.getNumberDays();
        
        // Adjust February's days for leap years
        if (this.month == Month.February && isLeapYear(year)) {
            maxDays = 29;
        }

        // Check if the day is valid for the month
        if (day < 1 || day > maxDays) {
            throw new InvalidDate("Invalid day: " + day);
        }

        // If all checks pass, set the fields
        this.day = day;
        this.year = year;
    }

    // toString method to print the date in the desired format
    public String toString() {
        return this.month.toString() + " " + this.day + " " + this.year;
    }

    // Main method to test the class
    public static void main(String[] args) {
        try {
            // Test case 1: Valid leap year date (29 February 2000)
            MyDate md = new MyDate(29, 2, 2000);
            System.out.println(md.toString());  // Output: February 29 2000
        } catch (InvalidDate e) {
            System.out.println(e.getMessage());
        }

        try {
            // Test case 2: Invalid leap year date (29 February 2001)
            MyDate md = new MyDate(29, 2, 2001);
            System.out.println(md.toString());
        } catch (InvalidDate e) {
            System.out.println(e.getMessage());  // Output: Invalid day: 29
        }

        try {
            // Test case 3: Valid date (22 March 1980)
            MyDate md = new MyDate(22, 3, 1980);
            System.out.println(md.toString());  // Output: March 22 1980
        } catch (InvalidDate e) {
            System.out.println(e.getMessage());
        }

        try {
            // Test case 4: Invalid month (month 0)
            MyDate md = new MyDate(1, 0, 1990);
            System.out.println(md.toString());
        } catch (InvalidDate e) {
            System.out.println(e.getMessage());  // Output: Invalid month: 0
        }

        try {
            // Test case 5: Invalid year (year 180)
            MyDate md = new MyDate(22, 3, 180);
            System.out.println(md.toString());
        } catch (InvalidDate e) {
            System.out.println(e.getMessage());  // Output: Invalid year: 180
        }
    }
}`;

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <main className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <pre className="p-6 text-sm overflow-x-auto">
          <code className="language-java">{javaCode}</code>
        </pre>
      </main>
    </div>
  );
}
