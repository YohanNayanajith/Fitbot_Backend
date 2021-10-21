package com.group39.fitbot.group39_fitbot.model;

public class EmployeeCount {
    private int maintainer_count;
    private int instructor_count;
    private int branch_manager_count;

    public EmployeeCount() {
    }

    public EmployeeCount(int maintainer_count, int instructor_count, int branch_manager_count) {
        this.maintainer_count = maintainer_count;
        this.instructor_count = instructor_count;
        this.branch_manager_count = branch_manager_count;
    }

    public int getMaintainer_count() {
        return maintainer_count;
    }

    public void setMaintainer_count(int maintainer_count) {
        this.maintainer_count = maintainer_count;
    }

    public int getInstructor_count() {
        return instructor_count;
    }

    public void setInstructor_count(int instructor_count) {
        this.instructor_count = instructor_count;
    }

    public int getBranch_manager_count() {
        return branch_manager_count;
    }

    public void setBranch_manager_count(int branch_manager_count) {
        this.branch_manager_count = branch_manager_count;
    }

    @Override
    public String toString() {
        return "EmployeeCount{" +
                "maintainer_count=" + maintainer_count +
                ", instructor_count=" + instructor_count +
                ", branch_manager_count=" + branch_manager_count +
                '}';
    }
}
