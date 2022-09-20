interface Bird {
    eat(): void;
}

interface FlyingBird {
    fly(): void;
}

interface RunningBird {
    run(): void; 
}

interface SwimmingBird {
    swim(): void;
}

class Tucan implements Bird, FlyingBird {
    fly(): void {
        
    }
    eat(): void {
        
    }
    run(): void {
        
    }
    swim(): void {
        
    }
}

class Huminbird implements Bird, RunningBird {
    eat(): void {
        
    }
    swim(): void {
        
    }
    run(): void {
        
    }
}

class Peguin implements Bird, SwimmingBird {
    eat(): void {
        
    }
    swim(): void {
        
    }
}